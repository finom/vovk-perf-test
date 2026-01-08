import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifa")
export default class IfaController {
  @operation({
    summary: "Get Ifa",
  })
  @get()
  static getIfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifa",
  })
  @post("{id}")
  static createIfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
