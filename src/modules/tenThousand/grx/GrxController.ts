import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grx")
export default class GrxController {
  @operation({
    summary: "Get Grx",
  })
  @get()
  static getGrx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grx",
  })
  @post("{id}")
  static createGrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
