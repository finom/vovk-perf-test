import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwf")
export default class GwfController {
  @operation({
    summary: "Get Gwf",
  })
  @get()
  static getGwf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gwf",
  })
  @post("{id}")
  static createGwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
