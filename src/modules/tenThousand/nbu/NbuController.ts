import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbu")
export default class NbuController {
  @operation({
    summary: "Get Nbu",
  })
  @get()
  static getNbu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbu",
  })
  @post("{id}")
  static createNbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
