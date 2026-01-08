import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyu")
export default class IyuController {
  @operation({
    summary: "Get Iyu",
  })
  @get()
  static getIyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyu",
  })
  @post("{id}")
  static createIyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
