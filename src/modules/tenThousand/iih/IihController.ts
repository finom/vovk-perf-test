import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iih")
export default class IihController {
  @operation({
    summary: "Get Iih",
  })
  @get()
  static getIih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iih",
  })
  @post("{id}")
  static createIih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
