import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iys")
export default class IysController {
  @operation({
    summary: "Get Iys",
  })
  @get()
  static getIys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iys",
  })
  @post("{id}")
  static createIys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
