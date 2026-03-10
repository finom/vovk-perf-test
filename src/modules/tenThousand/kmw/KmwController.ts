import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmw")
export default class KmwController {
  @operation({
    summary: "Get Kmw",
  })
  @get()
  static getKmw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmw",
  })
  @post("{id}")
  static createKmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
