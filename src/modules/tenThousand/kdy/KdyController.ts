import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdy")
export default class KdyController {
  @operation({
    summary: "Get Kdy",
  })
  @get()
  static getKdy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdy",
  })
  @post("{id}")
  static createKdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
