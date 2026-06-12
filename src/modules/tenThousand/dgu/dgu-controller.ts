import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgu")
export default class DguController {
  @operation({
    summary: "Get Dgu",
  })
  @get()
  static getDgu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dgu",
  })
  @post("{id}")
  static createDgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
