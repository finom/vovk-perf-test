import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcl")
export default class FclController {
  @operation({
    summary: "Get Fcl",
  })
  @get()
  static getFcl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fcl",
  })
  @post("{id}")
  static createFcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
