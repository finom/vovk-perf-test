import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idc")
export default class IdcController {
  @operation({
    summary: "Get Idc",
  })
  @get()
  static getIdc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Idc",
  })
  @post("{id}")
  static createIdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
