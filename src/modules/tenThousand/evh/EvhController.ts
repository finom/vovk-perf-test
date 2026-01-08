import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evh")
export default class EvhController {
  @operation({
    summary: "Get Evh",
  })
  @get()
  static getEvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evh",
  })
  @post("{id}")
  static createEvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
