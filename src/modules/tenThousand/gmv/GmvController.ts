import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmv")
export default class GmvController {
  @operation({
    summary: "Get Gmv",
  })
  @get()
  static getGmv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmv",
  })
  @post("{id}")
  static createGmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
