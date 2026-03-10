import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfd")
export default class KfdController {
  @operation({
    summary: "Get Kfd",
  })
  @get()
  static getKfd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kfd",
  })
  @post("{id}")
  static createKfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
