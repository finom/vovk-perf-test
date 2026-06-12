import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mki")
export default class MkiController {
  @operation({
    summary: "Get Mki",
  })
  @get()
  static getMki = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mki",
  })
  @post("{id}")
  static createMki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
