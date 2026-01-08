import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ioz")
export default class IozController {
  @operation({
    summary: "Get Ioz",
  })
  @get()
  static getIoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioz",
  })
  @post("{id}")
  static createIoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
