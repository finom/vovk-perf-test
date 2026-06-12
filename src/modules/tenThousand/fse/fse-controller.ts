import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fse")
export default class FseController {
  @operation({
    summary: "Get Fse",
  })
  @get()
  static getFse = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fse",
  })
  @post("{id}")
  static createFse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
