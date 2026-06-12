import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcn")
export default class FcnController {
  @operation({
    summary: "Get Fcn",
  })
  @get()
  static getFcn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fcn",
  })
  @post("{id}")
  static createFcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
