import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpp")
export default class CppController {
  @operation({
    summary: "Get Cpp",
  })
  @get()
  static getCpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpp",
  })
  @post("{id}")
  static createCpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
