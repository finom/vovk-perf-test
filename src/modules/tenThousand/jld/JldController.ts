import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jld")
export default class JldController {
  @operation({
    summary: "Get Jld",
  })
  @get()
  static getJld = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jld",
  })
  @post("{id}")
  static createJld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
