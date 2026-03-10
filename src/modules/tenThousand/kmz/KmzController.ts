import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmz")
export default class KmzController {
  @operation({
    summary: "Get Kmz",
  })
  @get()
  static getKmz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmz",
  })
  @post("{id}")
  static createKmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
