import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ioo")
export default class IooController {
  @operation({
    summary: "Get Ioo",
  })
  @get()
  static getIoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioo",
  })
  @post("{id}")
  static createIoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
