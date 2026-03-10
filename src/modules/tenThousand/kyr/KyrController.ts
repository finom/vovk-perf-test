import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyr")
export default class KyrController {
  @operation({
    summary: "Get Kyr",
  })
  @get()
  static getKyr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyr",
  })
  @post("{id}")
  static createKyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
