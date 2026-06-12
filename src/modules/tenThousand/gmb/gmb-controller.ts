import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmb")
export default class GmbController {
  @operation({
    summary: "Get Gmb",
  })
  @get()
  static getGmb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmb",
  })
  @post("{id}")
  static createGmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
