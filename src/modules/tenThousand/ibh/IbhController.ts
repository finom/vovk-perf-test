import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibh")
export default class IbhController {
  @operation({
    summary: "Get Ibh",
  })
  @get()
  static getIbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibh",
  })
  @post("{id}")
  static createIbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
