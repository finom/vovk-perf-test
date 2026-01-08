import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isc")
export default class IscController {
  @operation({
    summary: "Get Isc",
  })
  @get()
  static getIsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isc",
  })
  @post("{id}")
  static createIsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
