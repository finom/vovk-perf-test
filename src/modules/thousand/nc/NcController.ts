import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nc")
export default class NcController {
  @operation({
    summary: "Get Nc",
  })
  @get()
  static getNc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nc",
  })
  @post("{id}")
  static createNc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
