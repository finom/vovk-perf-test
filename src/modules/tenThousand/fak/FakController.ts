import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fak")
export default class FakController {
  @operation({
    summary: "Get Fak",
  })
  @get()
  static getFak = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fak",
  })
  @post("{id}")
  static createFak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
