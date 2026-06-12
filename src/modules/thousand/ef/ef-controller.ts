import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ef")
export default class EfController {
  @operation({
    summary: "Get Ef",
  })
  @get()
  static getEf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ef",
  })
  @post("{id}")
  static createEf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
