import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbu")
export default class FbuController {
  @operation({
    summary: "Get Fbu",
  })
  @get()
  static getFbu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fbu",
  })
  @post("{id}")
  static createFbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
