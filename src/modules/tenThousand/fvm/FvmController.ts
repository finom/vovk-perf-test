import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvm")
export default class FvmController {
  @operation({
    summary: "Get Fvm",
  })
  @get()
  static getFvm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvm",
  })
  @post("{id}")
  static createFvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
