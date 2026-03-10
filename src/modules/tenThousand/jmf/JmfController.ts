import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmf")
export default class JmfController {
  @operation({
    summary: "Get Jmf",
  })
  @get()
  static getJmf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jmf",
  })
  @post("{id}")
  static createJmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
