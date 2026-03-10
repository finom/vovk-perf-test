import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btp")
export default class BtpController {
  @operation({
    summary: "Get Btp",
  })
  @get()
  static getBtp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Btp",
  })
  @post("{id}")
  static createBtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
