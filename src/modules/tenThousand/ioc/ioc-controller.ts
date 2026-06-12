import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ioc")
export default class IocController {
  @operation({
    summary: "Get Ioc",
  })
  @get()
  static getIoc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ioc",
  })
  @post("{id}")
  static createIoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
