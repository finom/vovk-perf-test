import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzc")
export default class BzcController {
  @operation({
    summary: "Get Bzc",
  })
  @get()
  static getBzc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzc",
  })
  @post("{id}")
  static createBzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
