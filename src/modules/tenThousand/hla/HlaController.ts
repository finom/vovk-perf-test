import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hla")
export default class HlaController {
  @operation({
    summary: "Get Hla",
  })
  @get()
  static getHla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hla",
  })
  @post("{id}")
  static createHla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
