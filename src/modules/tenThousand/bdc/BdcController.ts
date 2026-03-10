import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdc")
export default class BdcController {
  @operation({
    summary: "Get Bdc",
  })
  @get()
  static getBdc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdc",
  })
  @post("{id}")
  static createBdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
