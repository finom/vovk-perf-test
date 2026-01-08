import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icp")
export default class IcpController {
  @operation({
    summary: "Get Icp",
  })
  @get()
  static getIcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icp",
  })
  @post("{id}")
  static createIcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
