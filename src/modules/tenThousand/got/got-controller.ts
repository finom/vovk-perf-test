import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("got")
export default class GotController {
  @operation({
    summary: "Get Got",
  })
  @get()
  static getGot = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Got",
  })
  @post("{id}")
  static createGot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
