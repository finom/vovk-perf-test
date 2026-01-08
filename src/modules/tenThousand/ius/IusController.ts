import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ius")
export default class IusController {
  @operation({
    summary: "Get Ius",
  })
  @get()
  static getIus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ius",
  })
  @post("{id}")
  static createIus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
