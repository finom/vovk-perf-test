import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdc")
export default class KdcController {
  @operation({
    summary: "Get Kdc",
  })
  @get()
  static getKdc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdc",
  })
  @post("{id}")
  static createKdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
