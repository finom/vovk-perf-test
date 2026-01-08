import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipj")
export default class IpjController {
  @operation({
    summary: "Get Ipj",
  })
  @get()
  static getIpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipj",
  })
  @post("{id}")
  static createIpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
