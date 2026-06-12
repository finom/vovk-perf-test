import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdc")
export default class JdcController {
  @operation({
    summary: "Get Jdc",
  })
  @get()
  static getJdc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdc",
  })
  @post("{id}")
  static createJdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
