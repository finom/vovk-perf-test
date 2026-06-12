import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnh")
export default class CnhController {
  @operation({
    summary: "Get Cnh",
  })
  @get()
  static getCnh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cnh",
  })
  @post("{id}")
  static createCnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
