import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igl")
export default class IglController {
  @operation({
    summary: "Get Igl",
  })
  @get()
  static getIgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igl",
  })
  @post("{id}")
  static createIgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
