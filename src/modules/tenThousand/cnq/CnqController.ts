import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnq")
export default class CnqController {
  @operation({
    summary: "Get Cnq",
  })
  @get()
  static getCnq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cnq",
  })
  @post("{id}")
  static createCnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
