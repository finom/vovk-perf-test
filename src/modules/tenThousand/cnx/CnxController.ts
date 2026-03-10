import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnx")
export default class CnxController {
  @operation({
    summary: "Get Cnx",
  })
  @get()
  static getCnx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cnx",
  })
  @post("{id}")
  static createCnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
