import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igw")
export default class IgwController {
  @operation({
    summary: "Get Igw",
  })
  @get()
  static getIgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igw",
  })
  @post("{id}")
  static createIgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
