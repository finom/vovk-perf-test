import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilp")
export default class IlpController {
  @operation({
    summary: "Get Ilp",
  })
  @get()
  static getIlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilp",
  })
  @post("{id}")
  static createIlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
