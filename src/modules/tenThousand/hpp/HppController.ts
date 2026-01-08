import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpp")
export default class HppController {
  @operation({
    summary: "Get Hpp",
  })
  @get()
  static getHpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpp",
  })
  @post("{id}")
  static createHpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
