import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkl")
export default class MklController {
  @operation({
    summary: "Get Mkl",
  })
  @get()
  static getMkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkl",
  })
  @post("{id}")
  static createMkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
