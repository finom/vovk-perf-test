import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jej")
export default class JejController {
  @operation({
    summary: "Get Jej",
  })
  @get()
  static getJej = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jej",
  })
  @post("{id}")
  static createJej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
