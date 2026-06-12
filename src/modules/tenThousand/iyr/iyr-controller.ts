import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyr")
export default class IyrController {
  @operation({
    summary: "Get Iyr",
  })
  @get()
  static getIyr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyr",
  })
  @post("{id}")
  static createIyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
