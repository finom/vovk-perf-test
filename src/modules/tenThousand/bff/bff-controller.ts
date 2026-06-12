import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bff")
export default class BffController {
  @operation({
    summary: "Get Bff",
  })
  @get()
  static getBff = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bff",
  })
  @post("{id}")
  static createBff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
